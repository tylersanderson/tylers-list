export const concatUnassignedGigs = (unassignedGigs) => {
  if (unassignedGigs != 'Not found' && unassignedGigs.length != 0) {
    const concatGigInfo = unassignedGigs.map(gig => ({...gig, concat: gig.gigname + " " + gig.street + " " + gig.city + " " + gig.stateabv + " " + gig.zipcode + " " + gig.gigpay + " " + gig.gignotes}))
    return concatGigInfo
  }
  else {
    return unassignedGigs = []
  }
}

export const setMyGigs = (myGigs) => {
  if (myGigs !== undefined && myGigs > 0) {
    return myGigs
  }
  else {
    return []
  }
}
