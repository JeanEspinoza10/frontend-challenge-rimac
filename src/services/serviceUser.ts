interface Fields {
  tipoDoc: string;
  nroDoc: string;
  phone: string;
  privacy: boolean;
  communications: boolean;
}

interface UserData {
  name: string;
  lastName: string;
  birthDay: string;
}

const URL_BASE = 'https://rimac-front-end-challenge.netlify.app/api/user.json';
export const NRO_DOC_BASE = '45457714';

export async function fetchUserData({ fields }: { fields: Fields }): Promise<UserData | null> {
  try {
    const response = await fetch(URL_BASE);
    if (!response.ok) {
      return null; 
    }

    const dataUser: UserData = await response.json();
    const { nroDoc } = fields;

    if (NRO_DOC_BASE === nroDoc) {
      return dataUser; 
    }   
    return null; 
  } catch (error) {
    return null;
  }
}