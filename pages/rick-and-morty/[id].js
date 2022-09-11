/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";

import dynamic from "next/dynamic";
import React from "react";

import Image from "next/image";
import Footer from "../../components/common/frontend/Footer";
import EpisodeList from "../../components/common/frontend/RickAndMorty/EpisodeList";
import { endPoints } from "../../constant/endpoints";
import { classByStaus, formatDate } from "../../utils/functions";
import Link from "next/link";

export async function getServerSideProps(context) {
  const slug = context.params;
  const res = await fetch(endPoints.randomuser + slug.id);
  const data = await res.json();

  // Pass data to the page via props
  return { props: data };
}

export default function rickAndMortyApi(data) {
  // console.log("rickAndMortyApi");

  console.log("data :", data);

  const ViewAll = dynamic(() =>
    import("../../components/common/frontend/ViewAll.js")
  );
  const FadeLoader = dynamic(() =>
    import("../../components/Loader/FadeLoader")
  );

  return (
    <div className="">
      <div className="md:container md:mx-auto">
        <div className="container mx-auto my-5 p-5">
          <div className="md:flex no-wrap md:-mx-2 ">
            <Link
              href={{
                pathname: "/rick-and-morty",
              }}
            >
              <a className="block w-full text-teal-600 text-md font-semibold rounded-lg py-3 ">
                BACK
              </a>
            </Link>
          </div>
          <div className="md:flex no-wrap md:-mx-2 ">
            <div className="w-full md:w-3/12 md:mx-2">
              <div className="bg-white p-3 border-t-4 border-green-400">
                <div className="image overflow-hidden text-center">
                  <Image
                    src={data.image}
                    className="h-auto w-full mx-auto"
                    width="300"
                    height="250"
                    alt={`${data.name}`}
                  />
                </div>
                <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">
                  {data.name}
                </h1>

                <ul className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 divide-y rounded shadow-sm">
                  <li className="flex items-center py-3">
                    <span>{data.species}</span>
                    <span className="ml-auto">
                      <span
                        className={
                          classByStaus(data.status) +
                          " py-1 px-2 rounded text-white text-sm"
                        }
                      >
                        {data.status}
                      </span>
                    </span>
                  </li>
                  <li className="flex items-center py-3">
                    <span>Member since</span>
                    <span className="ml-auto"> {formatDate(data.created)}</span>
                  </li>
                </ul>
              </div>

              <div className="my-4"></div>
            </div>
            <div className="w-full md:w-9/12 mx-2 h-64">
              <div className="bg-white p-3 shadow-sm rounded-sm">
                <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                  <span clas="text-green-500">
                    <svg
                      className="h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </span>
                  <span className="tracking-wide">About</span>
                </div>
                <div className="text-gray-700">
                  <div className="grid md:grid-cols-2 text-sm">
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">First Name</div>
                      <div className="px-4 py-2">{data.name.split(" ")[0]}</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Last Name</div>
                      <div className="px-4 py-2">{data.name.split(" ")[1]}</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Gender</div>
                      <div className="px-4 py-2">{data.gender}</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Last Seen</div>
                      <div className="px-4 py-2">{data.location.name}</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-3 shadow-sm rounded-sm">
                <div className="grid grid-cols-2">
                  <div>
                    <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                      <span clas="text-green-500">
                        <svg
                          className="h-5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                      </span>
                      <span className="tracking-wide">Eepisodes</span>
                    </div>
                    <ul className="list-inside space-y-2">
                      {data.episode.map((episode, index) =>
                        index < 5 ? (
                          <EpisodeList
                            key={index}
                            index={index}
                            item={episode}
                          />
                        ) : (
                          false
                        )
                      )}
                    </ul>
                    {data.episode.length > 5 ? (
                      <Link
                        href={{
                          pathname: "/rick-and-morty/[id]",
                          query: { id: data.id },
                        }}
                      >
                        <a className="block w-full text-teal-600 text-md font-semibold rounded-lg pt-3 ">
                          View all Episodes
                        </a>
                      </Link>
                    ) : (
                      false
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
