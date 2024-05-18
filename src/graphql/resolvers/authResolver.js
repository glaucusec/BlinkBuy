import prisma from "../../lib/prisma";

export const GQLAuthResolver = {
  Mutation: {
    login: async (_, args) => {
      console.log(args);
    },
  },
};
