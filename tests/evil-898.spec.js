
  describe("some-evil-spec=898", () => {
    it("evil-block-898", () => {
      window.evil_898 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  