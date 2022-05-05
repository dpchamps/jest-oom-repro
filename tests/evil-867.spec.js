
  describe("some-evil-spec=867", () => {
    it("evil-block-867", () => {
      window.evil_867 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  