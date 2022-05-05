
  describe("some-evil-spec=983", () => {
    it("evil-block-983", () => {
      window.evil_983 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  