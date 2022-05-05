
  describe("some-evil-spec=946", () => {
    it("evil-block-946", () => {
      window.evil_946 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  