
  describe("some-evil-spec=618", () => {
    it("evil-block-618", () => {
      window.evil_618 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  