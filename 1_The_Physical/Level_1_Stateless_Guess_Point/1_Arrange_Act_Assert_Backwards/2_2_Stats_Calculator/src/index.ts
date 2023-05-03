function sortArray(array: number[]) {
  var i, j;
  var len = array.length;

  var isSwapped = false;

  for (i = 0; i < len; i++) {
    isSwapped = false;

    for (j = 0; j < len; j++) {
      if (array[j] > array[j + 1]) {
        var temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        isSwapped = true;
      }
    }
    // IF no two elements were swapped
    // by inner loop, then break
    if (!isSwapped) {
      break;
    }
  }

  return array;
}

function findAverage(array: number[]) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  return sum / array.length;
}

const statsCalculator = (sequence: number[]) => {
  const sortedInput = sortArray(sequence);

  const minimum = sortedInput[0];
  const maximum = sortedInput[sortedInput.length - 1];

  return {
    minimum,
    maximum,
    count: sequence.length,
    average: findAverage(sequence),
  };
};

export default statsCalculator;
