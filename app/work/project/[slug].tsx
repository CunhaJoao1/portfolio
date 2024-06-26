import React from "react";

export default function Page({ params }: { params: { slug: string } }) {
  return <div className="pt-64">My Post: {params.slug}</div>
}