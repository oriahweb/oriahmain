import React from "react";
import Image from "next/image";
import { ITeamDT } from "@/types/team-d-t";

type Props = {
  item: ITeamDT;
};

export default function TeamItem({ item }: Props) {
  return (
    <div className="text-center">
      <div className="mb-3">
        <Image
          src={item.image}
          alt={item.name}
          width={220}
          height={220}
          style={{
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
      </div>
      <h5 style={{ fontSize: "1.1rem", fontWeight: "600", marginBottom: "0.25rem" }}>
        {item.name}
      </h5>
        <p style={{ margin: 0, fontSize: "0.9rem", color: "#666" }}>{item.designation}</p>
    </div>
  );
}
