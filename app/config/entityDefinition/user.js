module.exports = {
  user: {
    "id": {
      domain: "DO_ID"
    },
    "firstName": {
      domain: "DO_TEXTE_30",
      required: true
    },
    "lastName": {
      domain: "DO_TEXTE_30",
      required: true
    },
    "dateOfArrival": {
      domain: "DO_TEXTE_30",
      required: false
    },
    "poleCode": {
      domain: "DO_CODE"
    }
  },userCriteria: {
    "id": {
      domain: "DO_ID"
    },
    "firstName": {
      domain: "DO_TEXTE_30",
      required: false
    },
    "lastName": {
      domain: "DO_TEXTE_30",
      required: false
    },
    "dateOfArrival": {
      domain: "DO_TEXTE_30",
      required: false
    },
    "poleCode": {
      domain: "DO_CODE"
    }
  },
};