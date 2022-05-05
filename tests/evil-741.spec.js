
  describe("some-evil-spec=741", () => {
    it("evil-block-741", () => {
      window.evil_741 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  