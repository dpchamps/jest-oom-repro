
  describe("some-evil-spec=72", () => {
    it("evil-block-72", () => {
      window.evil_72 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  