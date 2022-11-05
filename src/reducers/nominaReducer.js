import { type } from "@testing-library/user-event/dist/type";

export const nominaReducer = (state = {}, action) => {
  switch (action.type) {
    case type.nominaAdd:
      return {};

    case type.nominaDelete:
      return {};

    case type.nominaRead:
      return {};

    case type.nominaClean:
      return {};

    default:
      return state;
  }
};
