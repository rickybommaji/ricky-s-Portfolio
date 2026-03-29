import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Business Data Analyst</h4>
                <h5>JSM Fire & Safety PVT LTD</h5>
              </div>
              <h3>2024 - 2026</h3>
            </div>
            <p>
              Analyzed and interpreted large datasets (1M+ rows) using SQL,
              Excel, and Python (pandas, NumPy). Built automated dashboards in
              Tableau and Power BI, reducing manual reporting time by 40%.
              Collaborated with marketing and sales teams on trend analysis, A/B
              testing, and customer segmentation.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech - Computer Science & Technology</h4>
                <h5>Anna University, Chennai</h5>
              </div>
              <h3>2020 - 2024</h3>
            </div>
            <p>
              CGPA: 8.3 | Best Thesis Awardee | Recognition for Extended
              Research Paper. Research on Cross-Platform Single Sign-On
              Integration in Azure ecosystem.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>CBSE Secondary Education</h4>
                <h5>Global Indian International School</h5>
              </div>
              <h3>2012 - 2018</h3>
            </div>
            <p>
              CGPA: 8.5 | Editor-in-Chief, SCC Newsletter | President, The
              Innovation Society.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
