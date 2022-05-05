
  describe("some-evil-spec=225", () => {
    it("evil-block-225", () => {
      window.evil_225 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  