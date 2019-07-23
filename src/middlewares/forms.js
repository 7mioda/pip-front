const formsMiddleware = () => next => async action => {
  if (
    action.payload &&
    action.payload.meta &&
    action.payload.meta.header === 'multipart/form-data'
  ) {
    const {
      payload: { data },
    } = action;
    const formData = new FormData();
    const auxData = Object.entries(data);
    auxData.forEach(element => {
      if (Array.isArray(element[1])) {
        element[1].forEach(
          (el, index) =>{
            if(el.constructor.name === "Object") {
              const auxEl = Object.entries(el);
                  auxEl.forEach(ae => formData.append(`${element[0]}[${index}][${ae[0]}]`, ae[1]))
            } else {
              formData.append(`${element[0]}[${index}]`, `${el}`)
            }

          }

        );
      } else if (element[0] === 'files') {
        Array.from(element[1]).forEach(el => formData.append(element[0], el));
      } else {
        formData.append(element[0], element[1]);
      }
    });
    // for (let [key, value] of formData.entries()) {
    //   console.log(key, ':', value);
    // }
    const newAction = action;
    newAction.payload.data = formData;
    newAction.payload.meta.header = null;
    return next(newAction);
  }
  return next(action);
};

export default formsMiddleware;
