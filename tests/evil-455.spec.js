
  describe("some-evil-spec=455", () => {
    it("evil-block-455", () => {
      window.evil_455 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  