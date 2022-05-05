
  describe("some-evil-spec=83", () => {
    it("evil-block-83", () => {
      window.evil_83 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  