
  describe("some-evil-spec=769", () => {
    it("evil-block-769", () => {
      window.evil_769 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  