import React from "react";
import styled from "styled-components";
export const Desktop1 = ({}) => {
  return (
    <DesktopRoot>
      <WhiteFlexColumn>
        <LogoAsset src={"https://file.rendit.io/n/s23NjlM8YclZESd3WvY2.svg"} />
        <Epmenu src={"https://file.rendit.io/n/sltjP0k0ZONp6iFLYhT4.svg"} />
        <Fluenthomefilled
          src={"https://file.rendit.io/n/xQc5a18f5UuGsJoAXdVs.svg"}
        />
        <Fluenthomefilled
          src={"https://file.rendit.io/n/1E993XTpiE2tNn0jVlIC.svg"}
        />
        <Fluenthomefilled
          src={"https://file.rendit.io/n/BwtRpqngA3DMbNAkSgSj.svg"}
        />
        <Fluenthomefilled
          src={"https://file.rendit.io/n/2XKkFsVR6lN3t8KR7l1C.svg"}
        />
        <Fluenthomefilled
          src={"https://file.rendit.io/n/VQz6vCTuneFQvv4wOubJ.svg"}
        />
        <Mdiaccount src={"https://file.rendit.io/n/uotO3WDRE7Xmaq8JL5uq.svg"} />
        <Cilaccountlogout
          src={"https://file.rendit.io/n/1H4MD03qTJEhxTitCEbw.svg"}
        />
      </WhiteFlexColumn>
      <FlexColumn>
        <FlexRow>
          <NeonCarrotFlexRow>
            <Element7>
              <Text1>Current Value</Text1>
              <Text2>$12</Text2>
            </Element7>
          </NeonCarrotFlexRow>
          <Search src={"https://file.rendit.io/n/32FIGBrAeSjmH0dxVocX.svg"} />
          <Search src={"https://file.rendit.io/n/LjILT7b1zpCepRMNA5Lu.svg"} />
          <FlexRow1>
            <UnsplashWFsNyI
              src={"https://file.rendit.io/n/ijoWWZEnXnsnGqKPtXLj.png"}
            />
            <Text3>Julia Michaels</Text3>
          </FlexRow1>
        </FlexRow>
        <Text4>Questions Paper</Text4>
        <NavyBlueFlexRow>
          <Add src={"https://file.rendit.io/n/LU6IzThQPGugvLiMC7Rt.svg"} />
          <Text5>Create New Question Paper</Text5>
        </NavyBlueFlexRow>
        <FlexRow2>
          <Element8>
            <Text6>Previous Question Papers</Text6>
            <Filterlist
              src={"https://file.rendit.io/n/CCbA5Md9IQn3ZvbNHXXt.svg"}
            />
          </Element8>
          <Text7>Filter By</Text7>
          <FlexRow3>
            <Text8>Created by others</Text8>
            <Cilaccountlogout
              src={"https://file.rendit.io/n/feW9Pn0gVYQvSwKhKe8n.svg"}
            />
          </FlexRow3>
        </FlexRow2>
        <FlexColumn1>
          <FlexRow4>
            <Text9>Grade</Text9>
            <Text10>Subject</Text10>
            <Text11>Topic</Text11>
            <Text12>Created By</Text12>
            <Element9>
              <Text13>Date Added By</Text13>
              <Arrowrightalt
                src={"https://file.rendit.io/n/pRt4ZquDrBvxN5hysvul.svg"}
              />
            </Element9>
          </FlexRow4>
          <CadetBlueFlexRow>
            <Text14>10</Text14>
            <Text15>physics</Text15>
            <Text16>Friction</Text16>
            <Text17>James Arthur</Text17>
            <Text18>Jan 01 2022</Text18>
          </CadetBlueFlexRow>
          <CadetBlueFlexRow>
            <Text14>07</Text14>
            <Text15>Chemistry</Text15>
            <Text21>Synthetic Fibres</Text21>
            <Text17>Casey Cooper</Text17>
            <Text18>Jan 01 2022</Text18>
          </CadetBlueFlexRow>
          <CadetBlueFlexRow>
            <Text14>08</Text14>
            <Text15>Maths</Text15>
            <Text16>Algebra</Text16>
            <Text17>James Arthur</Text17>
            <Text18>Jan 01 2022</Text18>
          </CadetBlueFlexRow>
          <Element10>
            <CadetBlueFlexRow3 top={"0px"}>
              <Text14>11</Text14>
              <Text15>Maths</Text15>
              <Text16>Algebra</Text16>
              <Text17>Casey Cooper</Text17>
              <Text18>Jan 01 2022</Text18>
            </CadetBlueFlexRow3>
            <CadetBlueFlexRow3 top={"88px"}>
              <Text14>08</Text14>
              <Text15>Maths</Text15>
              <Text16>Algebra</Text16>
              <Text17>James Arthur</Text17>
              <Text18>Jan 01 2022</Text18>
            </CadetBlueFlexRow3>
          </Element10>
        </FlexColumn1>
      </FlexColumn>
    </DesktopRoot>
  );
};
const DesktopRoot = styled.div`
  background-color: #ffffff;
  display: flex;
  overflow: hidden;
  flex-direction: row;
  justify-content: flex-start;
  gap: 48px;
  margin: auto;
  min-width: 1440px;
  align-items: center;
`;
const WhiteFlexColumn = styled.div`
  box-shadow: 0px 8px 24px 0px rgba(22, 22, 22, 0.04);
  height: 944px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px 32px 48px 32px;
`;
const LogoAsset = styled.img`
  width: 56px;
  height: 56px;
  margin: 0px 0px 79px 0px;
`;
const Epmenu = styled.img`
  width: 24px;
  height: 24px;
  align-self: flex-start;
  margin: 0px 0px 35px 11px;
`;
const Mdiaccount = styled.img`
  width: 24px;
  height: 24px;
  margin: 0px 0px 342px 0px;
`;
const FlexColumn = styled.div`
  width: 1238px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-grow: 1;
  align-items: flex-start;
  padding: 48px 0px;
`;
const FlexRow = styled.div`
  width: 466px;
  display: flex;
  align-self: flex-end;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0px 0px 24px 0px;
`;
const NeonCarrotFlexRow = styled.div`
  backdrop-filter: blur(9px);
  width: 168px;
  background-color: rgba(247, 148, 29, 0.5);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  padding: 8px 0px;
  margin: 0px 32px 0px 0px;
`;
const Element7 = styled.div`
  width: 137px;
  height: 32px;
  position: relative;
`;
const Text1 = styled.div`
  width: 122px;
  height: 32px;
  display: flex;
  font-size: 16px;
  font-family: Open Sans;
  font-weight: 400;
  text-transform: capitalize;
  color: rgba(22, 22, 22, 0.8);
  position: absolute;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`;
const Text2 = styled.div`
  text-align: right;
  width: 30.5px;
  height: 32px;
  display: flex;
  font-size: 16px;
  font-family: Open Sans;
  font-weight: 700;
  text-transform: capitalize;
  color: rgba(22, 22, 22, 0.8);
  position: absolute;
  left: 106.18px;
  flex-direction: column;
  align-items: end;
  justify-content: center;
`;
const FlexRow1 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  justify-content: center;
  align-items: center;
`;
const UnsplashWFsNyI = styled.img`
  width: 36px;
  height: 36px;
`;
const Text3 = styled.div`
  width: 126px;
  height: 24px;
  display: flex;
  font-size: 18px;
  font-family: Open Sans;
  font-weight: 400;
  text-transform: capitalize;
  color: rgba(22, 22, 22, 0.8);
  flex-direction: column;
  align-items: start;
  justify-content: center;
`;
const Text4 = styled.div`
  width: 284px;
  height: 48px;
  display: flex;
  font-size: 32px;
  font-family: Open Sans;
  font-weight: 400;
  text-transform: capitalize;
  color: #161616;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  margin: 0px 0px 36px 0px;
`;
const NavyBlueFlexRow = styled.div`
  width: 326px;
  background-color: #14a9ff;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 18px;
  align-items: center;
  border-radius: 16px;
  padding: 18px 13px 15px 13px;
  margin: 0px 0px 39px 0px;
`;
const Add = styled.img`
  width: 24px;
  height: 24px;
  align-self: flex-start;
`;
const Text5 = styled.div`
  font-size: 20px;
  font-family: Open Sans;
  font-weight: 700;
  text-transform: capitalize;
  color: #ffffff;
`;
const FlexRow2 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 0px 0px 35px 0px;
`;
const Element8 = styled.div`
  width: 323px;
  height: 50px;
  position: relative;
  flex-grow: 1;
  margin: 0px 566px 0px 0px;
`;
const Text6 = styled.div`
  width: 323px;
  height: 32px;
  display: flex;
  font-size: 24px;
  font-family: Open Sans;
  font-weight: 400;
  text-transform: capitalize;
  color: rgba(22, 22, 22, 0.8);
  position: absolute;
  top: 9px;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`;
const Filterlist = styled.img`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 13px;
  left: 296px;
`;
const Text7 = styled.div`
  text-align: center;
  width: 72px;
  height: 24px;
  display: flex;
  font-size: 18px;
  font-family: Open Sans;
  font-weight: 400;
  text-transform: capitalize;
  color: #aaaaaa;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0px 24px 0px 0px;
`;
const FlexRow3 = styled.div`
  border-width: 1px;
  border-color: #14a9ff;
  border-style: solid;
  width: 234px;
  display: flex;
  flex-direction: row;
  gap: 8px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  padding: 7px 0px;
`;
const Text8 = styled.div`
  text-align: center;
  width: 176px;
  height: 32px;
  display: flex;
  font-size: 20px;
  font-family: Open Sans;
  font-weight: 400;
  color: #14a9ff;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const FlexColumn1 = styled.div`
  height: 472px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
const FlexRow4 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 36px;
  margin: 0px 0px 23px 0px;
`;
const Text9 = styled.div`
  width: 68px;
  height: 32px;
  display: flex;
  font-size: 18px;
  font-family: Open Sans;
  font-weight: 400;
  text-transform: capitalize;
  color: #aaaaaa;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  margin: 0px 144px 0px 0px;
`;
const Text10 = styled.div`
  text-align: center;
  width: 75px;
  height: 32px;
  display: flex;
  font-size: 18px;
  font-family: Open Sans;
  font-weight: 400;
  text-transform: capitalize;
  color: #aaaaaa;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0px 175px 0px 0px;
`;
const Text11 = styled.div`
  width: 48px;
  height: 32px;
  display: flex;
  font-size: 18px;
  font-family: Open Sans;
  font-weight: 400;
  text-transform: capitalize;
  color: #aaaaaa;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  margin: 0px 200px 0px 0px;
`;
const Text12 = styled.div`
  text-align: center;
  width: 102px;
  height: 32px;
  display: flex;
  font-size: 18px;
  font-family: Open Sans;
  font-weight: 400;
  text-transform: capitalize;
  color: #aaaaaa;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0px 186px 0px 0px;
`;
const Element9 = styled.div`
  width: 156px;
  height: 32px;
  position: relative;
  flex-grow: 1;
`;
const Text13 = styled.div`
  text-align: center;
  width: 138px;
  height: 32px;
  display: flex;
  font-size: 18px;
  font-family: Open Sans;
  font-weight: 400;
  text-transform: capitalize;
  color: #aaaaaa;
  position: absolute;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Arrowrightalt = styled.img`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 4px;
  left: 132px;
`;
const Text21 = styled.div`
  width: 182px;
  height: 32px;
  display: flex;
  font-size: 20px;
  font-family: Open Sans;
  font-weight: 400;
  text-transform: capitalize;
  color: #161616;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  margin: 0px 66px 0px 0px;
`;
const Element10 = styled.div`
  height: 66px;
  position: relative;
  min-width: 1224px;
`;
const Fluenthomefilled = styled.img`
  width: 24px;
  height: 24px;
  margin: 0px 0px 48px 0px;
`;
const Cilaccountlogout = styled.img`
  width: 24px;
  height: 24px;
`;
const Search = styled.img`
  width: 24px;
  height: 24px;
  margin: 0px 24px 0px 0px;
`;
const CadetBlueFlexRow = styled.div`
  border-width: 1px;
  border-color: rgba(22, 22, 22, 0.1);
  border-style: solid;
  box-shadow: 0px 1px 16px 0px rgba(22, 22, 22, 0.04);
  width: 1134px;
  background-color: rgba(170, 170, 170, 0.05);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  padding: 15px 44px;
  margin: 0px 0px 22px 0px;
`;
const Text14 = styled.div`
  text-align: center;
  width: 32px;
  height: 32px;
  display: flex;
  font-size: 20px;
  font-family: Open Sans;
  font-weight: 400;
  text-transform: capitalize;
  color: #161616;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0px 171px 0px 0px;
`;
const Text15 = styled.div`
  width: 100px;
  height: 32px;
  display: flex;
  font-size: 20px;
  font-family: Open Sans;
  font-weight: 400;
  text-transform: capitalize;
  color: #161616;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  margin: 0px 150px 0px 0px;
`;
const Text16 = styled.div`
  width: 84px;
  height: 32px;
  display: flex;
  font-size: 20px;
  font-family: Open Sans;
  font-weight: 400;
  text-transform: capitalize;
  color: #161616;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  margin: 0px 164px 0px 0px;
`;
const Text17 = styled.div`
  width: 160px;
  height: 32px;
  display: flex;
  font-size: 20px;
  font-family: Open Sans;
  font-weight: 400;
  text-transform: capitalize;
  color: #161616;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  margin: 0px 138px 0px 0px;
`;
const Text18 = styled.div`
  width: 132px;
  height: 32px;
  display: flex;
  font-size: 20px;
  font-family: Open Sans;
  font-weight: 400;
  text-transform: capitalize;
  color: #161616;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`;
const CadetBlueFlexRow3 = styled.div`
  border-width: 1px;
  border-color: rgba(22, 22, 22, 0.1);
  border-style: solid;
  box-shadow: 0px 1px 16px 0px rgba(22, 22, 22, 0.04);
  width: 1134px;
  background-color: rgba(170, 170, 170, 0.05);
  display: flex;
  position: absolute;
  left: -1px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  padding: 15px 44px;
  top: ${(props) => props.top};
`;
