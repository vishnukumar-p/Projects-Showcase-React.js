import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`
export const SecondContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: white;
`
export const Navbar = styled.div`
  background-color: #f1f5f9;
  padding: 20px;
  width: 100%;
`
export const ImageElement = styled.img`
  width: 60%;
  max-width: 600px;
  padding: 30px;
`
export const Heading = styled.h1`
  color: #475569;
  font-size: 30px;
  font-family: 'Roboto';
  font-weight: bold;
`
export const ParaElement = styled.p`
  color: #475569;
  font-size: 17px;
  font-family: 'Roboto';
  font-weight: normal;
`
export const ListContainer = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
`
export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 15%;
  margin: 15px;
  border-radius: 10px;
  box-shadow: 5px 5px 10px 0 rgba(0, 0, 0, 0.5);
`
export const HeadingTwo = styled.p`
  color: #475569;
  font-size: 17px;
  font-family: 'Roboto';
  font-weight: normal;
  padding: 15px;
`
export const ImageElementTwo = styled.img`
  width: 100%;
  border-radius: 10px;
`
export const ImageLogo = styled.img`
  height: 40px;
  width: 100px;
`
export const SelectElement = styled.select`
  margin-left: 44px;
  margin-top: 20px;
  margin-bottom: 20px;
  width: 40%;
  border: 2px solid #475569;
  border-radius: 3px;
  color: #475569;
  font-size: 13px;
  font-family: 'Roboto';
  height: 40px;
`
export const ButtonRetry = styled.button`
  border: none;
  background-color: #328af2;
  font-size: 12px;
  font-family: 'Roboto';
  border-radius: 5px;
  color: white;
`
