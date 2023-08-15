export const FETCH_API = async (Option) => {
  const {path='', _method = "GET", _body, isToken = false} = Option;

  const headers = new Headers();
  headers.append('content-type', 'application/json');
  headers.append('credentials', '"same-origin'); 
  if (isToken) headers.append('Authorization', `${localStorage[process.env.REACT_APP_TOKEN]}`);

  try{
    const resp = await fetch(`${process.env.REACT_APP_API_URL}/${path}`, {
      method: _method,
      body: JSON.stringify(_body),
      headers
    });

    return await resp.json();
  }catch(err){
    console.log("Error: " + err)
  }
}

