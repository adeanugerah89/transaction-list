const bankNameFormatter = bankName => {
  if (bankName.length > 4) {
    const firstLetter = bankName.substr(0, 1);
    return `${firstLetter.toUpperCase()}${bankName.substr(1)}`;
  } else {
    return bankName.toUpperCase();
  }
};

const idrFormatter = (amount = 0) => {
  const numberString = amount
    .toString()
    .replace(/[^,\d]/g, '')
    .toString();
  const split = numberString.split(',');
  const sisa = split[0].length % 3;
  let rupiah = split[0].substr(0, sisa);
  const ribuan = split[0].substr(sisa).match(/\d{3}/gi);

  if (ribuan) {
    const separator = sisa ? '.' : '';
    rupiah += separator + ribuan.join('.');
  }

  rupiah = split[1] !== undefined ? `${rupiah},${split[1]}` : rupiah;
  return `Rp.${rupiah || '0'}`;
};

const formatDate = value => {
  let string = value.toString();
  let date = string.split(' ')[0];
  let year = parseInt(date.split('-')[0]);
  let month = parseInt(date.split('-')[1] - 1);
  let day = parseInt(date.split('-')[2]);

  const months = [
    'Januari',
    'Februari',
    'Maret',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Agustus',
    'September',
    'Oktober',
    'November',
    'Desember',
  ];

  let newDate = `${day.toString()} ${months[
    month
  ].toString()} ${year.toString()}`;
  return newDate;
};

const sortAsc = (arr, field) => {
  return arr.sort(function (a, b) {
    if (a[field] > b[field]) {
      return 1;
    }
    if (b[field] > a[field]) {
      return -1;
    }
    return 0;
  });
};

const sortDesc = (arr, field) => {
  return arr.sort(function (a, b) {
    if (a[field] > b[field]) {
      return -1;
    }
    if (b[field] > a[field]) {
      return 1;
    }
    return 0;
  });
};

export {bankNameFormatter, idrFormatter, formatDate, sortAsc, sortDesc};
