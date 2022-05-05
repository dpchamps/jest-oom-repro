
  describe("some-evil-spec=45", () => {
    it("evil-block-45", () => {
      window.evil_45 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  