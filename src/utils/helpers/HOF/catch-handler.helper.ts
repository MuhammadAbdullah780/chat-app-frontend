type Args = (arg: ThrowError) => Promise<any>;

type Options = {
  allowThrowingError?: boolean;
};

type ThrowError = (message: string) => void;

export const catchHanlder = async (
  func: Args,
  { allowThrowingError = true }: Options,
) => {
  const throwError = (message: string) => {
    throw new Error(message);
  };

  try {
    await func?.(throwError);
  } catch (error) {
    if (allowThrowingError) {
      throw new Error(error as string);
    }
  }
};
