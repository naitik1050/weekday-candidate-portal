import React from "react";
import { Card, CardContent, Typography, CardActions, Button, Grid } from "@mui/material";

export default function JobCard({ jobData }) {
  const {
    companyName,
    logoUrl,
    jobDetailsFromCompany,
    jobRole,
    location,
    minExp,
    minJdSalary,
    maxJdSalary,
    salaryCurrencyCode,
    jdLink,
  } = jobData;

  const renderCardContent = () => (
    <>
      <Grid container mb={2}>
        <img src={logoUrl} alt="company_logo" style={{ width: 70, height: 70 }} />
      </Grid>
      {[
        { label: "Company", value: companyName },
        { label: "Role", value: jobRole },
        { label: "Experience", value: minExp ? `${minExp}+ years` : "Not Specified" },
        { label: "Location", value: location },
        {
          label: "Salary",
          value: minJdSalary && maxJdSalary ? `${minJdSalary}K - ${maxJdSalary}K ${salaryCurrencyCode}` : "Not Specified",
        },
      ].map((item, index) => (
        <Typography key={index} gutterBottom variant="body1" component="h2">
          <Typography gutterBottom variant="body1" component="span" sx={{ fontWeight: "bold" }}>
            {item.label}:
          </Typography>{" "}
          {item.value}
        </Typography>
      ))}
      <Typography variant="body2" color="textSecondary" component="p" sx={{ ...ellipsisStyle, marginBottom: 0 }}>
        <Typography gutterBottom variant="body1" component="span" sx={{ fontWeight: "bold" }}>
          Description:
        </Typography>{" "}
        {jobDetailsFromCompany}
      </Typography>
    </>
  );

  return (
    <Card sx={{ maxWidth: '70%', margin: "16px", height: 400, justifyContent: 'center' }} elevation={3}>
      <CardContent>
        {renderCardContent()}
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "flex-end", marginBottom: 2 }}>
        <Button
          size="medium"
          color="primary"
          variant="contained"
          sx={{ fontWeight: "bold", backgroundColor: "#55efc4", color: "black", paddingInline: 5 }}
          href={jdLink}
        >
          Apply
        </Button>
      </CardActions>
    </Card>
  );
}

const ellipsisStyle = {
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
  textOverflow: "ellipsis",
  WebkitLineClamp: 4,
};
