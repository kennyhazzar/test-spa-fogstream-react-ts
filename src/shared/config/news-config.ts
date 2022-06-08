const getEnvVar = (key: string) => {
  if (process.env[key] === undefined) {
    throw new Error(`Env variable ${key} is required`);
  }
  return process.env[key] || '';
};

export const API_TOKEN = getEnvVar('REACT_APP_API_TOKEN');
export const API_URL = getEnvVar('REACT_APP_API_URL');
