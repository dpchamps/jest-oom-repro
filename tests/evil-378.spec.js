
  describe("some-evil-spec=378", () => {
    it("evil-block-378", () => {
      window.evil_378 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  