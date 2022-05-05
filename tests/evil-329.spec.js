
  describe("some-evil-spec=329", () => {
    it("evil-block-329", () => {
      window.evil_329 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  