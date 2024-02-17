import { useRouter } from "next/router";

type QueryParam = string | string[] | undefined;

export const useQueryRouter = () => {
  const { query, push } = useRouter();

  const pushParams = (
    param: Record<string, QueryParam>,
    keepPrevious: boolean = true,
  ) => {
    console.log("PARAMS___", param);

    push({ query: keepPrevious ? { ...query, ...param } : param }, undefined, {
      shallow: true,
    });
  };

  const deleteParam = (param: string) => {
    if (!query?.[param]) return;
    const updatedQuery = structuredClone(query);

    delete updatedQuery?.[param];

    pushParams(updatedQuery, false);
  };

  const updateParam = (key: string, val: QueryParam) => {
    if (!query?.[key]) return;
    const up = Object.assign(query, { [key]: val });

    console.log({ updated: up }, "OBJECT__DOT__ASSIGN");
    const updated = { ...query, [key]: val };

    pushParams(updated, false);
  };

  return {
    pushParams,
    deleteParam,
    updateParam,
  };
};
