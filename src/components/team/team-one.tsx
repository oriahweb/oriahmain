"use client";
import React from "react";
import team_data from "@/data/team-data";
import TeamItem from "./team-item";
import { ITeamDT } from "@/types/team-d-t";
import TeamModal from "../modal/team-modal";

// prop type
type IProps = {
  spacing?: string;
};

const TeamOne = ({ spacing = "pt-20" }: IProps) => {
  const [showModal, setShowModal] = React.useState(false);
  const [teamItem, setTeamItem] = React.useState<ITeamDT | null>(null);

  function handleTeamModal(team: ITeamDT) {
    setShowModal(!showModal);
    setTeamItem(team);
  }

  return (
    <>
      <div className={`tp-team-area ${spacing} pb-120`}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12 mb-5">
              <p className="text-center" style={{fontSize: "2.5rem", fontWeight: "500"}}>
                Notre Équipe
              </p>
            </div>
            {team_data.map((member) => (
              <div key={member.id} className="col-lg-4 col-md-6 mb-5">
                <div className="px-4">
                  <TeamItem item={member} handleTeamModal={handleTeamModal} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* team modal */}
      {teamItem && (
        <TeamModal
          setShowModal={setShowModal}
          showModal={showModal}
          teamItem={teamItem}
        />
      )}
      {/* team modal */}
    </>
  );
};

export default TeamOne;
