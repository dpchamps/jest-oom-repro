
  describe("some-evil-spec=739", () => {
    it("evil-block-739", () => {
      window.evil_739 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  