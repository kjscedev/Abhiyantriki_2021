import TextAndButton from "../components/TextAndButton/TextAndButton";
import TwinkleTwinkle from "../components/TwinkleTwinkle/TwinkleTwinkle";
import "./Parvaah.css";

interface ParvaahProps {}

const Parvaah = ({}: ParvaahProps) => {
  return (
    <div>
      <div className="container mb-5">
        <div className="col">
          {/* <TwinkleTwinkle title="Parvaah" /> */}
          <img
            src={process.env.PUBLIC_URL + "/assets/gifs/parvaah.gif"}
            className="parvaah-title"
            alt=""
          />

          <div className="d-flex justify-content-around align-items-center text-center mb-5 parvaah">
            <img
              src="/assets/logos/Parvaah Logo.png"
              alt=""
              className="parvaah logo"
            />
            <div className="vl"></div>
            <img
              src="/assets/logos/Sustainable Reality logo.png"
              alt=""
              className="parvaah logo"
            />
          </div>

          <TextAndButton
            paraText="Parvaah, the social wing of K.J Somaiya College of Engineering works
            towards the social causes of the society and improving the
            conditions of the less privileged. Team Parvaah, through its various
            initiatives, has been striving to spread maximum social awareness in
            the community."
            buttonText="Volunteer"
            buttonHref="#"
          />
        </div>
      </div>

      <div>

        {/* 2017 Parvaah Events */}

        {/* <!-- image left text right --> */}
        <div className="container p-3 text-white">
          <div className="row">
            <div className="col-sm-6 col-md-6 flex-column d-flex justify-content-center">
              <div className="align-items-center d-flex justify-content-center flex-column">
                <div className="fs-1 fw-bold">Beach Clean-up (2017)</div>
                <div
                  className="align-items-center d-flex justify-content-center flex-column"
                  style={{ fontSize: 20, fontFamily: "Roboto" }}
                >
                  Team Parvaah was a part of the Versova Beach clean up drive. A
                  lot of student organisations across Mumbai joined hands to
                  save the beach. Cleaning and hygiene issues have always been
                  of utmost importance in our city.
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6">
              <div
                style={{
                  marginTop: "30",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <img
                  style={{ width: "50%" }}
                  src="/assets/images/events/Events.png"
                  alt="Beach Clean-up"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 2019 Parvaah Events */}
        
        {/* <!-- image right text left --> */}
        <div className="container p-3 text-white">
          <div className="row">
            <div className="col-sm-6 col-md-6 flex-column d-flex justify-content-center order-md-2">
              <div className="align-items-center d-flex justify-content-center flex-column">
                <div className="fs-1 fw-bold">Eco Run (2019)</div>
                <div
                  className="align-items-center d-flex justify-content-center flex-column"
                  style={{ fontSize: 20, fontFamily: "Roboto" }}
                >
                  With The Three-Year-Long Cause Of Zero-Waste Community,
                  Parvaah Organised A ‘Parvaah Eco Run’ Which Advocated The Importance Of Walking To Reduce The Global Carbon Footprint. 
                  We Decided To Go An Extra Mile Working Towards A Cause With Passion, Dedication And Panache.
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 order-md-1">
              <div
                style={{
                  marginTop: 30,
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <img
                  style={{ width: "50%" }}
                  src="../assets/images/events/ecorun_2019.png"
                  alt="Beach Clean-up"
                />
              </div>
            </div>
          </div>
        </div>

        {/* <!-- image left text right --> */}
        <div className="container p-3 text-white">
          <div className="row">
            <div className="col-sm-6 col-md-6 flex-column d-flex justify-content-center">
              <div className="align-items-center d-flex justify-content-center flex-column">
                <div className="fs-1 fw-bold">Signal Shala (2019)</div>
                <div
                  className="align-items-center d-flex justify-content-center flex-column"
                  style={{ fontSize: 20, fontFamily: "Roboto" }}
                >
                  Parvaah Collaborated With Signal Shala To Spread Awareness Regarding The Importance Of 5R’s (Reduce, Reuse, Recycle, Rot, Refuse). 
                  With Its Motto To Create A Zero-Waste Community, 
                  Parvaah Has Been Constantly Promoting The Necessity Of Reducing The Generation Of Waste.
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6">
              <div
                style={{
                  marginTop: "30",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <img
                  style={{ width: "50%" }}
                  src="/assets/images/events/Signal_Shala_2019.png"
                  alt="Beach Clean-up"
                />
              </div>
            </div>
          </div>
        </div>

        {/* <!-- image right text left --> */}
        <div className="container p-3 text-white">
          <div className="row">
            <div className="col-sm-6 col-md-6 flex-column d-flex justify-content-center order-md-2">
              <div className="align-items-center d-flex justify-content-center flex-column">
                <div className="fs-1 fw-bold">Secret Santa (2019)</div>
                <div
                  className="align-items-center d-flex justify-content-center flex-column"
                  style={{ fontSize: 20, fontFamily: "Roboto" }}
                >
                  What Is A Christmas Celebration Without A Secret Santa? Team Parvaah Visited The Desire Society, 
                  A Community Of HIV Positive Children. 
                  The Kids Here Are Provided With Care And Education By An NGO. 
                  The Team Members Helped The Children Decorate Christmas Trees And Later Santa Distributed Gifts Among Them.
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 order-md-1">
              <div
                style={{
                  marginTop: 30,
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <img
                  style={{ width: "50%" }}
                  src="../assets/images/events/Secret_Santa_2019.png"
                  alt="Beach Clean-up"
                />
              </div>
            </div>
          </div>
        </div>

        {/* <!-- image left text right --> */}
        <div className="container p-3 text-white">
          <div className="row">
            <div className="col-sm-6 col-md-6 flex-column d-flex justify-content-center">
              <div className="align-items-center d-flex justify-content-center flex-column">
                <div className="fs-1 fw-bold">Diwali Donation Drive (2019)</div>
                <div
                  className="align-items-center d-flex justify-content-center flex-column"
                  style={{ fontSize: 20, fontFamily: "Roboto" }}
                >
                  The Festival Of Lights Brings With It Happiness And Joy. 
                  Team Parvaah Associated With The Maher Neev Orphanage And Spread Smiles On The Little Faces. 
                  There Is Always A Sense Of Contentment In Giving And We Experienced A Complete Bliss Being Able To Spend Some Time With The Children.
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6">
              <div
                style={{
                  marginTop: "30",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <img
                  style={{ width: "50%" }}
                  src="/assets/images/events/Diwali_Donation_2019.png"
                  alt="Beach Clean-up"
                />
              </div>
            </div>
          </div>
        </div>

        {/* <!-- image right text left --> */}
        <div className="container p-3 text-white">
          <div className="row">
            <div className="col-sm-6 col-md-6 flex-column d-flex justify-content-center order-md-2">
              <div className="align-items-center d-flex justify-content-center flex-column">
                <div className="fs-1 fw-bold">Tree Plantation Drive (2019)</div>
                <div
                  className="align-items-center d-flex justify-content-center flex-column"
                  style={{ fontSize: 20, fontFamily: "Roboto" }}
                >
                  With Our Environment On The Verge Of Being Knocked Down By Humans, 
                  Woodlands Are The Only Thing That Can Cushion Our Habitat. 
                  As They Say “The Best Time To Plant A Tree Was 20 Years Ago And The Second-Best Time Is Now”, 
                  Abiding By The Same, Parvaah Conducted A Tree Plantation Drive.
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 order-md-1">
              <div
                style={{
                  marginTop: 30,
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <img
                  style={{ width: "50%" }}
                  src="../assets/images/events/tree_plantation_2019.png"
                  alt="Beach Clean-up"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 2020 Parvaah Events */}

        <div className="container p-3 text-white">
          <div className="row">
            <div className="col-sm-6 col-md-6 flex-column d-flex justify-content-center">
              <div className="align-items-center d-flex justify-content-center flex-column">
                <div className="fs-1 fw-bold">Know Your Plastic (2020)</div>
                <div
                  className="align-items-center d-flex justify-content-center flex-column"
                  style={{ fontSize: 20, fontFamily: "Roboto" }}
                >
                  The Festival Of Lights Brings With It Happiness And Joy. 
                  Team Parvaah Associated With The Maher Neev Orphanage And Spread Smiles On The Little Faces. 
                  There Is Always A Sense Of Contentment In Giving And We Experienced A Complete Bliss Being Able To Spend Some Time With The Children.
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6">
              <div
                style={{
                  marginTop: "30",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <img
                  style={{ width: "50%" }}
                  src="/assets/images/events/Know_your_plastic_2020.png"
                  alt="Beach Clean-up"
                />
              </div>
            </div>
          </div>
        </div>

        {/* <!-- image right text left --> */}
        <div className="container p-3 text-white">
          <div className="row">
            <div className="col-sm-6 col-md-6 flex-column d-flex justify-content-center order-md-2">
              <div className="align-items-center d-flex justify-content-center flex-column">
                <div className="fs-1 fw-bold">Beautification (2020)</div>
                <div
                  className="align-items-center d-flex justify-content-center flex-column"
                  style={{ fontSize: 20, fontFamily: "Roboto" }}
                >
                  With Our Environment On The Verge Of Being Knocked Down By Humans, 
                  Woodlands Are The Only Thing That Can Cushion Our Habitat. 
                  As They Say “The Best Time To Plant A Tree Was 20 Years Ago And The Second-Best Time Is Now”, 
                  Abiding By The Same, Parvaah Conducted A Tree Plantation Drive.
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 order-md-1">
              <div
                style={{
                  marginTop: 30,
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <img
                  style={{ width: "50%" }}
                  src="../assets/images/events/Beautification_2020.png"
                  alt="Beach Clean-up"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="container p-3 text-white">
          <div className="row">
            <div className="col-sm-6 col-md-6 flex-column d-flex justify-content-center">
              <div className="align-items-center d-flex justify-content-center flex-column">
                <div className="fs-1 fw-bold">Diwali Donation Drive (2020)</div>
                <div
                  className="align-items-center d-flex justify-content-center flex-column"
                  style={{ fontSize: 20, fontFamily: "Roboto" }}
                >
                  The Festival Of Lights Brings With It Happiness And Joy. 
                  Team Parvaah Associated With The Maher Neev Orphanage And Spread Smiles On The Little Faces. 
                  There Is Always A Sense Of Contentment In Giving And We Experienced A Complete Bliss Being Able To Spend Some Time With The Children.
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6">
              <div
                style={{
                  marginTop: "30",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <img
                  style={{ width: "50%" }}
                  src="/assets/images/events/Diwali_Donation_2020.png"
                  alt="Beach Clean-up"
                />
              </div>
            </div>
          </div>
        </div>

        {/* <!-- image right text left --> */}
        <div className="container p-3 text-white">
          <div className="row">
            <div className="col-sm-6 col-md-6 flex-column d-flex justify-content-center order-md-2">
              <div className="align-items-center d-flex justify-content-center flex-column">
                <div className="fs-1 fw-bold">Mangrove Clean-Up (2020)</div>
                <div
                  className="align-items-center d-flex justify-content-center flex-column"
                  style={{ fontSize: 20, fontFamily: "Roboto" }}
                >
                  With Our Environment On The Verge Of Being Knocked Down By Humans, 
                  Woodlands Are The Only Thing That Can Cushion Our Habitat. 
                  As They Say “The Best Time To Plant A Tree Was 20 Years Ago And The Second-Best Time Is Now”, 
                  Abiding By The Same, Parvaah Conducted A Tree Plantation Drive.
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 order-md-1">
              <div
                style={{
                  marginTop: 30,
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <img
                  style={{ width: "50%" }}
                  src="../assets/images/events/Mangrove_clean_up_2020.png"
                  alt="Beach Clean-up"
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Parvaah;