
  describe("some-evil-spec=526", () => {
    it("evil-block-526", () => {
      window.evil_526 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  