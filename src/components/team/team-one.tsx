"use client";
import React from "react";
import team_data from "@/data/team-data";
import TeamItem from "./team-item";
import { ITeamDT } from "@/types/team-d-t";

// prop type
type IProps = {
  spacing?: string;
};

const TeamOne = ({ spacing = "pt-20" }: IProps) => {
  return (
    <div className={`tp-team-area ${spacing} pb-120`}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12 mb-5">
            <p className="text-center" style={{ fontSize: "2.5rem", fontWeight: "500" }}>
              Notre Équipe
            </p>
          </div>

          {team_data.map((member) => (
            <div key={member.id} className="col-lg-4 col-md-6 col-12 mb-4 d-flex justify-content-center">
              <TeamItem item={member} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamOne;
