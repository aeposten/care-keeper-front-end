import styled from "styled-components";

const Resources = () => {
  return (
    <ResourcesContainer>
      <h2>
        <u>Resources</u>
      </h2>
      <dl>
        <br></br>
        <dt>
          {" "}
          <b>
            <a href="https://www.aspca.org/pet-care/animal-poison-control">
              {" "}
              ASPCA Animal Poison Control{" "}
            </a>
          </b>
        </dt>
        <dd>
          {" "}
          - Did your client's pet eat a potentially dangerous substance or get
          themselves into an unexpected (and possibly dangerous) snack? Check
          this database to see various foods, plants, and household products
          that are toxic to dogs, cats, and other pets. If you are concerned,
          please call (888) 426-4435 (a consultation fee may apply){" "}
        </dd>
        <br></br>
        <dt>
          {" "}
          <b>
            <a href="https://www.aaha.org/your-pet/pet-microchip-lookup/microchip-search/">
              {" "}
              Pet Microchip Lookup via the American Animal Hospital Association{" "}
            </a>
          </b>
        </dt>
        <dd>
          {" "}
          - Have you found a stray animal, or are making sure your client's pet
          is up-to-date with their microchip information? Type the serial number
          into this database to make sure everything us up to snuff.{" "}
        </dd>
        <br></br>
        <dt>
          {" "}
          <b>
            <a href="https://www.avma.org/resources/pet-owners/emergencycare/first-aid-tips-pet-owners">
              {" "}
              Pet First Aid via the American Veterinary Medical Association
            </a>
          </b>{" "}
        </dt>
        <dd>
          {" "}
          - Emergencies do happen. See what you can do to provide first aid to
          an injured pet when veterinary care is not immediately available.{" "}
          <b>
            Not to be used in place of a licensed veterinary professional.
          </b>{" "}
        </dd>
      </dl>
    </ResourcesContainer>
  );
};
export default Resources;

const ResourcesContainer = styled.div`
  border: solid 5px #3a86ff;
  border-radius: 40px;
  height: 60%;
  width: 80%;
  padding: 25px;
  margin-top: 50px;
`;
