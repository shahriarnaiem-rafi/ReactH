const Home = () => {
    return (
      <>
        <div>
          {/* Content Wrapper */}
          <div className="content-wrapper">
            <div className="container-fluid dashboard-show">
              <div className="row">
                {/* First Row - Parsel Received and Old Parsel */}
                <div className="col-lg-6 col-12">
                  <div
                    className="small-box"
                    style={{
                      backgroundColor: "#00aaff", // Light Blue
                      width: "90%",
                      height: 220,
                      margin: "0 auto",
                      marginBottom: "20px",
                      borderRadius: "12px",
                      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    <div className="inner">
                      <h3
                        style={{
                          textAlign: "center",
                          fontSize: "40px",
                          fontWeight: "bold",
                          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)",
                          marginTop: "40px",
                          color: "#fff",
                        }}
                        id="parselrecived"
                      >
                        200
                      </h3>
                      <p
                        style={{
                          textAlign: "center",
                          fontSize: "18px",
                          fontWeight: "bold",
                          textShadow: "1px 1px 3px rgba(0, 0, 0, 0.5)",
                          color: "#fff",
                        }}
                      >
                        Parsel Received
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-12">
                  <div
                    className="small-box"
                    style={{
                      backgroundColor: "#28a745", // Green
                      width: "90%",
                      height: 220,
                      margin: "0 auto",
                      marginBottom: "20px",
                      borderRadius: "12px",
                      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    <div className="inner">
                      <h3
                        style={{
                          textAlign: "center",
                          fontSize: "40px",
                          fontWeight: "bold",
                          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)",
                          marginTop: "40px",
                          color: "#fff",
                        }}
                      >
                        400
                      </h3>
                      <p
                        style={{
                          textAlign: "center",
                          fontSize: "18px",
                          fontWeight: "bold",
                          textShadow: "1px 1px 3px rgba(0, 0, 0, 0.5)",
                          color: "#fff",
                        }}
                      >
                        Old Parsel
                      </p>
                    </div>
                  </div>
                </div>
              </div>
  
              {/* Second Row - Total Parsel and Pending Delivered */}
              <div className="row">
                <div className="col-lg-6 col-12">
                  <div
                    className="small-box"
                    style={{
                      backgroundColor: "#ffc107", // Yellow
                      width: "90%",
                      height: 220,
                      margin: "0 auto",
                      marginBottom: "20px",
                      borderRadius: "12px",
                      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    <div className="inner">
                      <h3
                        style={{
                          textAlign: "center",
                          fontSize: "40px",
                          fontWeight: "bold",
                          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)",
                          marginTop: "40px",
                          color: "#fff",
                        }}
                      >
                        499
                      </h3>
                      <p
                        style={{
                          textAlign: "center",
                          fontSize: "18px",
                          fontWeight: "bold",
                          textShadow: "1px 1px 3px rgba(0, 0, 0, 0.5)",
                          color: "#fff",
                        }}
                      >
                        Total Parsel
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-12">
                  <div
                    className="small-box"
                    style={{
                      backgroundColor: "#dc3545", // Red
                      width: "90%",
                      height: 220,
                      margin: "0 auto",
                      marginBottom: "20px",
                      borderRadius: "12px",
                      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    <div className="inner">
                      <h3
                        style={{
                          textAlign: "center",
                          fontSize: "40px",
                          fontWeight: "bold",
                          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)",
                          marginTop: "40px",
                          color: "#fff",
                        }}
                      >
                        7878
                      </h3>
                      <p
                        style={{
                          textAlign: "center",
                          fontSize: "18px",
                          fontWeight: "bold",
                          textShadow: "1px 1px 3px rgba(0, 0, 0, 0.5)",
                          color: "#fff",
                        }}
                      >
                        Pending Delivered
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default Home;
  