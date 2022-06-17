import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { getCompany } from "../graphql/queries";

function CompanyDetail() {
  const { companyId } = useParams();
  const [company, setCompany] = useState(null);

  useEffect(() => {
    getCompany(companyId).then(setCompany);
  }, []);

  if (!company) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <h1 className="title">{company.name}</h1>
        <div className="box">{company.description}</div>
      </div>
    );
  }
}

export default CompanyDetail;
