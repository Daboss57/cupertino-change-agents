'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import teamData from '../data/team/all_members.json';
import SiktaImage from '/public/assets/team/sikta.jpg';


interface TeamMember {
  name: string
  role: string
  image: string
  bio: string
  order: number
}

export default function TeamSection() {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([])

  useEffect(() => {
    setTeamMembers(teamData.teamMembers.sort((a: { order: number; }, b: { order: number; }) => a.order - b.order))
  }, [])

  return (
    <section id="team" className="py-16 bg-gray-100" data-aos="fade-up">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">Our Team</h2> 
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={member.name} 
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="relative h-64 w-full">
                <Image
                  src={`/assets/img/team/${member.image}`}
                  alt={member.name}
                  fill
                  className="object-cover"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                <p className="text-sm text-orange-500 font-semibold mb-4">{member.role}</p>
                <p className="text-gray-600 text-sm line-clamp-6">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}