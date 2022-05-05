
  describe("some-evil-spec=464", () => {
    it("evil-block-464", () => {
      window.evil_464 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  