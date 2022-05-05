
  describe("some-evil-spec=80", () => {
    it("evil-block-80", () => {
      window.evil_80 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  