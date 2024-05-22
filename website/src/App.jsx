import styled from "styled-components"
export const App = () => {
    return (
        <Container>
            <Logo src="logo.png" alt="logo" />
            <h1>Coming soon 👀</h1>
        </Container>
    )

}


const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    `

const Logo = styled.img`
    width: 100px;
    height: 100px;
    margin-top: 30px;
    margin-bottom: 5px;
    align-self: center;
    justify-self: center;
    `