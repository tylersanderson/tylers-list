export const concatUnassignedGigs = (unassignedGigs) => {
  if (Array.isArray(unassignedGigs) && unassignedGigs.length !== 0) {
    const concatGigInfo = unassignedGigs.map(gig => ({...gig, concat: gig.gigname + " " + gig.street + " " + gig.city + " " + gig.stateabv + " " + gig.zipcode + " " + gig.gigpay + " " + gig.gignotes}))
    return concatGigInfo
  }
  else {
    return unassignedGigs = []
  }
}

export const setMyGigs = (myGigs) => {
  if (myGigs !== undefined && myGigs.length !== 0) {
    return myGigs
  }
  else {
    return []
  }
}

//unassignedGigs !== 'Not found'