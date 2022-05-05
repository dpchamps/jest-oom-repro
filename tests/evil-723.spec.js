
  describe("some-evil-spec=723", () => {
    it("evil-block-723", () => {
      window.evil_723 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  