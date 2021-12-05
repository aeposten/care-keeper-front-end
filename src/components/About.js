import styled from "styled-components";

const About = () => {
  return (
    <AboutContainer>
      <h2>
        <u>About Us!</u>
      </h2>
      <br></br>
      <p>
        Care Keeper is a top-rate application for pet-sitters, designed with the
        necessities of pet care in mind. We have
        years of experience hands-on in veterinary medicine, and understand the
        importance of keeping the information for your clients organized and
        simple to access.
      </p>
    </AboutContainer>
  );
};
export default About;

const AboutContainer = styled.div`
  border: solid 5px #3a86ff;
  border-radius: 40px;
  padding: 25px;
  height: 60%;
  width: 80%;
  margin-top: 50px;
`;
