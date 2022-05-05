
  describe("some-evil-spec=820", () => {
    it("evil-block-820", () => {
      window.evil_820 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  