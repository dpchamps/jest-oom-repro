
  describe("some-evil-spec=976", () => {
    it("evil-block-976", () => {
      window.evil_976 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  