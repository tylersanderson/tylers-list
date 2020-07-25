export const concatUnassignedGigs = (unassignedGigs) => {
  const concatGigInfo = unassignedGigs.map(gig => ({...gig, concat: gig.gigname + " " + gig.street + " " + gig.city + " " + gig.stateabv + " " + gig.zipcode + " " + gig.gigpay + " " + gig.gignotes}))

  return concatGigInfo
}
