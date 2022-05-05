
  describe("some-evil-spec=407", () => {
    it("evil-block-407", () => {
      window.evil_407 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  